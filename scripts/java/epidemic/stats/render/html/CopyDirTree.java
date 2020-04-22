package epidemic.stats.render.html;

import java.io.IOException;
import java.nio.file.CopyOption;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.StandardCopyOption;
import java.nio.file.attribute.BasicFileAttributes;

public final class CopyDirTree {

  /** Simple test harness. */
  private static void main(String... args) throws IOException {
    String from = "C:\\temp\\alpha\\"; 
    String to = "C:\\temp\\beta\\";
    CopyDirTree test = new CopyDirTree();
    test.copyDirTree(Paths.get(from), Paths.get(to), CAN_OVERWRITE);
    log("Done");
  }

  static final CopyOption[] CAN_OVERWRITE = {
    StandardCopyOption.REPLACE_EXISTING, 
    StandardCopyOption.COPY_ATTRIBUTES,
    LinkOption.NOFOLLOW_LINKS //you likely want this
  };

  /** 
   Copy the contents of one directory into another directory.
   @since Java 7
  */
  void copyDirTree(Path fromDir, Path toDir, CopyOption... opts) throws IOException {
    if (shouldCopy(fromDir, toDir)){
      Files.walkFileTree(fromDir, new CopyVisitor(fromDir, toDir, opts));
    }
  }

  // PRIVATE 

  /**
   Copy only if the from-directory exists, and the 
   to-dir is not below the from-directory.  
  */
  private boolean shouldCopy(Path fromDir, Path toDir){
    boolean fromDirExistsAndIsDir = fromDir.toFile().isDirectory(); 
    boolean toIsBelowFrom = toDir.toAbsolutePath().startsWith(fromDir.toAbsolutePath());
    boolean result = fromDirExistsAndIsDir && !toIsBelowFrom;
    if (!result){
      log("Won't copy from " + fromDir + " to " + toDir);
      log(fromDirExistsAndIsDir, toIsBelowFrom);
    }
    return result;
  }
  
  private static final class CopyVisitor extends SimpleFileVisitor<Path> {
    CopyVisitor(Path fromDir, Path toDir, CopyOption... opts){
      this.fromDir = fromDir;
      this.toDir = toDir;
      this.opts = opts;
    }
    /** 
     First create the dir.
     Create any non-existent parent dir's, if needed.
     If {@code dir} already exists, then do nothing; no exception is thrown if 
     the dir already exists.
    */
    @Override public FileVisitResult preVisitDirectory(
      Path dir, BasicFileAttributes attrs
    ) throws IOException {
      log("Creating dir: " + dir);
      Files.createDirectories(toDir.resolve(fromDir.relativize(dir)));  
      return FileVisitResult.CONTINUE;      
    }
    /** 
     Then copy the files into the dir. 
     Note that the {@code opts} only apply to this method. 
    */
    @Override public FileVisitResult visitFile(
      Path file, BasicFileAttributes attrs
    ) throws IOException {
      log("Copying file: " + file);
      Files.copy(file, toDir.resolve(fromDir.relativize(file)), opts);
      return FileVisitResult.CONTINUE;      
    }
    private Path fromDir;
    private Path toDir;
    private CopyOption[] opts;
  }
  
  private static void log(Object... things) {
    for (Object thing : things){
      System.out.println(thing);
    }
  }
} 