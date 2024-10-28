# Problem Statement

Given an array, `ARR` of `N` integers, print **“true”** if it is possible to split the array into some finite number of subsets such that:
1. Each subset has the same integer in it.
2. All subsets have the same size, which should be greater than one.

Print **“false”** if it is not possible to achieve the above conditions.

### Example

**Input:**  
`ARR = [1, 2, 4, 4, 1, 2]`

**Output:**  
`true`

**Explanation:**  
We can split the array as: `[1, 1], [4, 4], [2, 2]`.  
Each subset has a size of two, and all elements in each subset are the same.

---

## Detailed Explanation

### Input/Output Format, Notes, Images

### Constraints

- \( 1 <= T <= 10 \)
- \( 1 <= N <= 10^5 \)
- \( -10^9 <= ARR[i] <= 10^9 \)
- **Time Limit:** 1 second

### Sample Inputs and Outputs

#### Sample Input 1:
2<br>
6<br>
2 2 4 5 4 5<br>
5<br>
4 3 5 6 3<br>
#### Sample Output 1 :
true<br>
false<br>
#### Explanation Of Sample Input 1 :
For the first test case, we can split the array like this: [2, 2], [4, 4], [5, 5].<br><br>

For the second test case, it is not possible to split the array with the given condition.

#### Sample Input 2 :
2<br>
6<br>
2 3 4 5 3 5<br>
9<br>
2 3 3 2 3 1 2 1 1<br>
#### Sample Output 2 :
false<br>
true

<span style="color: red; font-weight: bold;">Try solving it on your own before checking the solution</span>

<details>
  <summary>Click to view the solution code</summary>

  ```java
  package com;

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
</details>