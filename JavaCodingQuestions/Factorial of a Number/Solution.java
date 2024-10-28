import java.util.Scanner;
import java.util.stream.IntStream;

public class Solution {
    public static int findFactorial(int N) {
        int factorial = IntStream.rangeClosed(1, N)
                                 .reduce(1, (x, y) -> x * y);
        return factorial;
    }
    
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		while (T-- > 0) {
			int N = sc.nextInt();
			System.out.println(findFactorial(N));
		}

		sc.close();
	}
}
