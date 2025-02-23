package DP;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 계단오르기2579 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int[] stair = new int[301];
        int[] dp = new int[301];

        for(int i=1;i<=n;i++){
            st = new StringTokenizer(br.readLine());
            stair[i] = Integer.parseInt(st.nextToken());
        }
        dp[1] = stair[1];
        dp[2] = stair[1]+stair[2];
        dp[3] = Math.max(stair[1],stair[2]) + stair[3];
            

        for(int i=4;i<=n;i++){
            dp[i] = Math.max(dp[i-3]+stair[i-1],dp[i-2])+stair[i];
        }
        System.out.println(dp[n]);
    }
}
