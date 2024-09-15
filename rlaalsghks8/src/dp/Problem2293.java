package dp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

//동전1
public class Problem2293 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        int[] coin = new int[n+1];
        int[] dp = new int[k+1];

        for(int i = 1; i<=n; i++)
            coin[i] = Integer.parseInt(br.readLine());

        for(int i = 1; i<=n; i++){
            for(int j = coin[0]; j<=k; j++){
                if(j<coin[i])
                    continue;
                dp[j] += dp[j-coin[i]];
            }
        }

        System.out.println(dp[k]);
    }
}
