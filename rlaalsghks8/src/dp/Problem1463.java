package dp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Problem1463 {
    static Integer[] dp;

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        dp = new Integer[n+1];
        dp[0] = dp[1] = 0;

        System.out.print(recur(n));


    }

    static int recur(int n){
        if(dp[n]==null){
            if(n%6==0){    //2,3으로 나누어지는 경우의수  -1 까지
                dp[n] = Math.min(recur(n-1),Math.min(recur(n/3),recur(n/2)))+1;
            }
            else if(n%3==0){   //3으로만 나누어지는 경우의 수와 -1
                dp[n] = Math.min(recur(n/3),recur(n-1))+1;
            }
            else if(n%2==0){  //2로만 나누어지는 경우의 수와 -1
                dp[n] = Math.min(recur(n/2), recur(n-1)) + 1;
            }
            else{     // 다 포함이 안되는 경우의 수는 -1만 해준다.
                dp[n] = recur(n-1) + 1;
            }

        }
        return dp[n];
    }
}
