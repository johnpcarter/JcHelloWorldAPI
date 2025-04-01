package jc.helloworld._priv;

// -----( IS Java Code Template v1.2

import com.wm.data.*;
import com.wm.util.Values;
import com.wm.app.b2b.server.Service;
import com.wm.app.b2b.server.ServiceException;
// --- <<IS-START-IMPORTS>> ---
// --- <<IS-END-IMPORTS>> ---

public final class jdbc

{
	// ---( internal utility methods )---

	final static jdbc _instance = new jdbc();

	static jdbc _newInstance() { return new jdbc(); }

	static jdbc _cast(Object o) { return (jdbc)o; }

	// ---( server methods )---




	public static final void test (IData pipeline)
        throws ServiceException
	{
		// --- <<IS-START(test)>> ---
		// @sigtype java 3.5
		System.out.println("boo");
		// --- <<IS-END>> ---

                
	}
}

