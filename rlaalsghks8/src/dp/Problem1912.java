package dp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Problem1912 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[n];
        int[] dp = new int[n];

        for(int i=0; i<n; i++){
            StringTokenizer st = new StringTokenizer(br.readLine()," ");
            arr[i] = Integer.parseInt(st.nextToken());
        }
        dp[0] = arr[0];
        int max = arr[0];
        for(int i=1; i<n; i++){
            dp[i] = Math.max(dp[i-1]+arr[i],arr[i]);

            max = Math.max(max,dp[i]);
        }
        System.out.println(max);

    }
}
