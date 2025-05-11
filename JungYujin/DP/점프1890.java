package DP;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 점프1890 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int[][] arr = new int[n][n];
        long[][] dp = new long[n][n];
        for(int i=0;i<n;i++) {
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<n;j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        dp[0][0] = 1;
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                int num = arr[i][j];
                if(dp[i][j]>0 && arr[i][j]>0) {
                    if(j+num<n) dp[i][j+num] += dp[i][j];
                    if(i+num<n) dp[i+num][j] += dp[i][j];
                }
            }
        }
        System.out.println(dp[n-1][n-1]);
    }
}
