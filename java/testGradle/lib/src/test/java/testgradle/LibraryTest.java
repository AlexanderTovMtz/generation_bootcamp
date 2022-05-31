
package testgradle;

import org.junit.jupiter.api.*;
//import static org.junit.Assert.*;

public class LibraryTest {
    @Test 
    public void testSomeLibraryMethod() {
        Library classUnderTest = new Library();
        Assertions.assertTrue(classUnderTest.someLibraryMethod());
    }
}
