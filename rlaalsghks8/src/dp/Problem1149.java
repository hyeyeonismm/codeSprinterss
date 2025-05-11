package dp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem1149 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[][] arr = new int[N][N];



        for(int i=0; i<N; i++){
            StringTokenizer st = new StringTokenizer(br.readLine()," ");
            for(int j=0; j<3; j++){
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for(int i=1; i<N; i++){
            for(int j=0; j<3; j++){
                arr[i][j] += Math.min(arr[i-1][(j+1)%3],arr[i-1][(j+2)%3]);
            }
        }
        int answer = 0;

        answer= Math.min(Math.min(arr[N-1][0],arr[N-1][1]),arr[N-1][2]);

        System.out.print(answer);

    }
}
