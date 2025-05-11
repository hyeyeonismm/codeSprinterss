package dp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem1890 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n= Integer.parseInt(br.readLine());
        int board[][] = new int[n][n];
        long dp[][] = new long[n][n];


        for( int i = 0; i<n; i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            for( int j = 0; j<n; j++){
                board[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        dp[0][0] = 1;

        //2차원 배열 탐색 진행
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                if(dp[i][j]==0 || board[i][j]==0)
                    continue;

                int jump = board[i][j];

                if(j+jump<n) //오른쪽 이동
                    dp[i][j+jump] += dp[i][j];
                if(i+jump<n) //아래 이동
                    dp[i+jump][j] += dp[i][j];
            }
        }

        System.out.println(dp[n-1][n-1]);


    }
}
