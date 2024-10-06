package dp;

import java.io.IOException;
import java.util.Scanner;
//그리디문제인줄 알았지만 dp 였다는 사실

public class Problem12865 {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();  // 물품의 수
        int weight = sc.nextInt();  // 준서가 버틸 수 있는 최대 무게

        int[][] dp = new int[N + 1][weight + 1];
        int[] items = new int[N + 1];  // 물건의 무게
        int[] values = new int[N + 1];  // 물건의 가치

        // 물건 정보 입력 받기
        for (int i = 1; i <= N; i++) {
            items[i] = sc.nextInt();
            values[i] = sc.nextInt();
        }

        // DP 테이블 채우기
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= weight; j++) {
                dp[i][j] = dp[i - 1][j];  // 물건을 선택하지 않을 경우
                if (j - items[i] >= 0) {  // 물건을 선택할 수 있는 경우
                    dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - items[i]] + values[i]);
                }
            }
        }

        // 결과 출력
        System.out.println(dp[N][weight]);
    }
}