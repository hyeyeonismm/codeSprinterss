package dp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Problem9625 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] dpA = new int[N+1];
        int[] dpB = new int[N+1];

        dpA[1] = 0;
        dpB[1] = 1;
        if(N>=2){
            dpA[2] = 1;
            dpB[2] = 1;
        }
        if(N>=3){
            for(int i=3; i<=N; i++){
                dpA[i] = dpA[i-2] + dpA[i-1];
                dpB[i] = dpB[i-2] + dpB[i-1];
            }
        }

        System.out.print(dpA[N]+" "+dpB[N]);




    }
}
