import factory.Advogado;
import factory.JoseAdvogado;

/**
 * Demo class. Everything comes together here.
 */
public class Demo {
    private static Advogado jose;

    public static void main(String[] args) {
        jose = new JoseAdvogado();
        jose.mostrarAdvogado();      
    }
}
