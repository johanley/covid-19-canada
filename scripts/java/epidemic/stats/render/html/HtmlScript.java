package epidemic.stats.render.html;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import epidemic.stats.Util;

/** 
 Generate HTML. 
 The resulting tree is copied (overwrites) to the /docs directory on the github repo, 
 where it can be served directly, using 'github pages'.
 
 DEPENDENCY: run this script only AFTER the json files have been updated. 
*/
public class HtmlScript {

  /** Run this script with args from the command line (match the ctor args below, and their order).  */
  public static void main(String... args) throws IOException {
    HtmlScript script = new HtmlScript(args[0], args[1], args[2], args[3], args[4]);
    script.run();
  }
 
  /**
   Constructor.
    @param fromDir where the template files reside 
    @param toDir where the output of this script is placed (template files with data inserted)
    @param versionFile contains a single item: a version number that is incremented monotonically
    @param jsonDir where the json files are located (to make a wee database for js-land)
    @param screenshotDir where screenshots are held
  */
  public HtmlScript(String fromDir, String toDir, String versionFile, String jsonDir, String screenshotDir) {
    this.fromDir = fromDir;
    this.toDir = toDir;
    this.versionFile = versionFile;
    this.jsonDir = jsonDir;
    this.screenshotDir = screenshotDir;
  }
  
  /** Run the script. */
  public void run() throws IOException {
    log("Generating html.");
    Integer version = readVersion() + 1;
    log("Incrementing version to: " + version);
    
    log("Copying template html files (with overwrite) from " + fromDir + " to " + toDir);
    copyTemplateTree(fromDir, toDir);
    
    Map<String, String> placeholders = getPlaceholders(version);
    log("Replacing placeholders with data. Placeholder names: " + placeholders.keySet());
    replaceThe(placeholders, toDir);
    
    incrementTo(version);
    log("Done generating html.");
  }
  
  // PRIVATE 
  
  private String fromDir;
  private String toDir;
  /**
   A file that holds only simple version number.
   The number increases monotonically: 1, 2, 3, etc., with each run of this class.
  */
  private String versionFile;
  private String jsonDir;
  private String screenshotDir;
  
  private final static Charset ENCODING = StandardCharsets.UTF_8;
  private final static String VERSION = "VERSION";
  
  private final static String STATS_RAW_DATA = "stats_raw_data.js";
  private static final String JSON_DEATHS = "json_deaths";
  private static final String JSON_KNOWN_CASES = "json_known_cases";
  private static final String JSON_TESTS = "json_tests";
  private static final String JSON_SCREENSHOT_DIRS = "json_screenshot_dirs";
  private static final String SEP = "_";

  private static final void log(String text) {
    System.out.println(text);
  }
  
  private Integer readVersion() throws IOException {
    Path path = Paths.get(versionFile);
    List<String> lines = Files.readAllLines(path, ENCODING);
    String raw = lines.get(0);
    return Integer.valueOf(raw);
  }
  
  private void incrementTo(Integer nextVersion) throws IOException {
    Path path = Paths.get(versionFile);
    List<String> lines = new ArrayList<>();
    lines.add(nextVersion.toString());
    Files.write(path, lines, ENCODING);    
  }
  
  private Map<String, String> getPlaceholders(Integer version) throws IOException{
    Map<String, String> result = new LinkedHashMap<>();
    result.put(VERSION, version.toString());
    result.put(JSON_DEATHS, jsonFor(JSON_DEATHS));
    result.put(JSON_KNOWN_CASES, jsonFor(JSON_KNOWN_CASES));
    result.put(JSON_TESTS, jsonFor(JSON_TESTS));
    result.put(JSON_SCREENSHOT_DIRS, jsonForScreenshotDirs());
    return result;
  }
  
  private void copyTemplateTree(String fromDir, String toDir) throws IOException {
    CopyDirTree test = new CopyDirTree();
    test.copyDirTree(Paths.get(fromDir), Paths.get(toDir), CopyDirTree.CAN_OVERWRITE);
  }
  
  private void replaceThe(Map<String, String> placeholders, String toDir) throws IOException {
    Files.walkFileTree(Paths.get(toDir), new MyVisitor(placeholders));
  }
  
  private String jsonFor(String jsonId) throws IOException {
    int idx = jsonId.indexOf(SEP); //the first sep char
    String fileName = jsonId.substring(idx+1) + ".json";
    Path file = Paths.get(jsonDir, fileName);
    return read(file);
  }
  
  private static String read(Path file)  throws IOException {
    StringBuilder result = new StringBuilder();
    List<String> lines = Files.readAllLines(file, ENCODING);
    for(String line : lines) {
      result.append(line + Util.NL);
    }
    return result.toString();
  }

  /**   ["2020-04-20_21h30mADT", "..."]   No trailing comma. */
  private String jsonForScreenshotDirs() {
    List<String> result = new ArrayList<>();
    File screenshotsDirectory = new File(screenshotDir);
    for(File dir : screenshotsDirectory.listFiles()) {
      result.add("\"" + dir.getName() + "\"");
    }
    return result.toString();
  }

  /** Process files in the dir tree. */
  private static final class MyVisitor extends SimpleFileVisitor<Path> {
    MyVisitor(Map<String, String> replacements){
      this.replacements = replacements;
    }
    /** Edit the file by replacing specially formatted text strings ${blah}. */
    @Override public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
      if (file.getFileName().toString().endsWith(".html") || file.getFileName().toString().equals(STATS_RAW_DATA)){
        log("Making replacements in: " + file);
        String text = read(file);
        for(String key : replacements.keySet()) {
          text = text.replace("${" + key +"}", replacements.get(key));
        }
        write(file, text);
      }
      return FileVisitResult.CONTINUE;      
    }
    //PRIVATE
    private Map<String, String> replacements;
    private void write(Path file, String content) throws IOException {
      String[] lines = content.split(Pattern.quote(Util.NL));
      Files.write(file, Arrays.asList(lines), ENCODING);
    }
  }
}
