package dp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Problem2839 {

    static int N;

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        int bongji = 0;

        bongji = dp(N);

        System.out.print(bongji);

    }

    static int dp(int n) {
        int maxfiveCnt = n / 5;

        for (int i = maxfiveCnt; i >= 0; i--) {  // i >= 0으로 수정
            int remain = n - (5 * i);
            if (remain % 3 == 0) {
                return i + (remain / 3); // 봉지 개수 반환
            }
        }

        return -1; // 조합 불가능한 경우
    }
}
