package epidemic.stats.datastore;

import static epidemic.stats.Util.DOT;
import static epidemic.stats.Util.chopInTwo;
import static epidemic.stats.Util.hasContent;
import static epidemic.stats.Util.mustHave;
import static epidemic.stats.Util.quote;

import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Stream;

import epidemic.stats.Abort;

/** Hides the policies of what goes where. */
public class FileSys {

  /** Directory names. */
  public enum Dir {
    screenshots, md, tmp, csv, json;
  }
  
  /** @param baseDir the directory under which the data files are found. */
  public FileSys(String baseDir) throws Abort {
    mustHave(hasContent(baseDir), "Base directory empty. Where are the files, dude?"); 
    mustHave(dirExists(baseDir), "Base directory unknown: " + quote(baseDir) + ". Where are the files, dude?"); 
    this.baseDir = baseDir;
  }

  public File dir(Dir dir) {
    return fileFor(dir.name());
  }
  
  /**
   Uses a convention for the file extension. 
   Doesn't work for screenshots! 
   @param thing whose toString provides the file's name (less the extension). 
  */
  public File fileInThe(Dir dir, Object thing) throws IOException {
    File parent = dir(dir);
    File result = new File(parent, thing.toString() + DOT + dir.name()); 
    return result;
  }

  public File mostRecentScreenshotDir() throws Abort {
    File screenshotsDir = fileFor(SCREENSHOTS);
    Optional<File> mostRecent = Stream.of(screenshotsDir.listFiles()).max(File::compareTo);
    return mostRecent.get();
  }

  /** Used to generate links. */
  public Map<String, String> screenshotDirNameForDate() {
    Map<String, String> result = new LinkedHashMap<String, String>();
    List<File> dirs = screenshotDirectories();
    for (File dir : dirs) {
      result.put(chopInTwo(dir.getName(), SEP_SCREENSHOT_DIR)[DATE_PART], dir.getName());
    }
    return result;
  }
  
  //PRIVATE
  
  private String baseDir;
  
  // directory names
  private static final String SCREENSHOTS = "screenshots";
  private static final String SEP_SCREENSHOT_DIR = "_";
  private static final Integer DATE_PART = 0;

  private boolean dirExists(String dirName) {
    File dir = new File(dirName);
    return dir.exists() && dir.canRead();
  }
  
  private File fileFor(String path) {
    return new File(baseDir, path);
  }

  private List<File> screenshotDirectories() {
    File screenshotsDir = fileFor(SCREENSHOTS);
    return Arrays.asList(screenshotsDir.listFiles());
  }
}
