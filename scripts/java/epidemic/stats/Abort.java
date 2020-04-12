package epidemic.stats;

/** 
 Using a checked exception to communicate various error conditions.
 
  (This works nicely in the context of a script. 
  There's little error-handling code in the caller.)
*/
public final class Abort extends Exception {

  public Abort(String msg){
    super(msg);
  }
  
  private static final long serialVersionUID = -6284355759903525560L;

}
