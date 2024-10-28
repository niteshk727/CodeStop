import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Scanner;

public class Solution {
	public static boolean isPossibleToSplit(int n, int[] arr) {

		boolean flag = false;// flag to return

		// if array contains only one element
		if (arr.length == 1)
			return flag;

		// otherwise, use map to store frequency
		HashMap<Integer, Integer> checkCount = new LinkedHashMap<>();
		for (Integer i : arr)
			checkCount.put(i, checkCount.getOrDefault(i, 0) + 1);

		// check if map values in set result to 1, to ensure equal subset element count
		HashSet<Integer> check = new LinkedHashSet<>();
		for (Map.Entry<Integer, Integer> temp : checkCount.entrySet()) {
			check.add(temp.getValue());
		}

		if (check.size() == 1 && n != checkCount.size())
			flag = true;

		return flag;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		while (T-- > 0) {
			int N = sc.nextInt();
			int[] arr = new int[N];
			for (int i = 0; i < N; i++) {
				arr[i] = sc.nextInt();
			}
			System.out.println(isPossibleToSplit(N, arr));
		}

		sc.close();
	}
}