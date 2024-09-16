package bruteforce;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem14888 {

    static int n;
    static int MAX = Integer.MIN_VALUE;
    static int MIN = Integer.MAX_VALUE;
    static int[] numlist;
    static int[] oprList;

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());
        numlist = new int[n];
        oprList = new int[4];

        StringTokenizer num = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < n; i++) {
            numlist[i] = Integer.parseInt(num.nextToken());
        }
        StringTokenizer opr = new StringTokenizer(br.readLine(), " ");
        for (int i = 0; i < 4; i++) {
            oprList[i] = Integer.parseInt(opr.nextToken());
        }

        solution(numlist[0], 1);

        System.out.println(MAX);
        System.out.println(MIN);

    }

    public static void solution(int num, int idx) {
        if (idx == n) {
            MAX = Math.max(MAX, num);
            MIN = Math.min(MIN, num);
            return;
        }

        for (int i = 0; i < 4; i++) {
            if (oprList[i] > 0) {
                oprList[i]--;
                switch (i) {
                    case 0:
                        solution(num + numlist[idx], idx + 1);  // 덧셈
                        break;
                    case 1:
                        solution(num - numlist[idx], idx + 1);  // 뺄셈
                        break;
                    case 2:
                        solution(num * numlist[idx], idx + 1);  // 곱셈
                        break;
                    case 3:  // 나눗셈 처리
                        if (numlist[idx] != 0) {  // 0으로 나누기 방지
                            // C++14 기준에 따른 음수 나눗셈 처리
                            if (num < 0) {
                                solution(-(Math.abs(num) / numlist[idx]), idx + 1);
                            } else {
                                solution(num / numlist[idx], idx + 1);
                            }
                        }
                        break;
                }
                oprList[i]++;
            }
        }
    }
}