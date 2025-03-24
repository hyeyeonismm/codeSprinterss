package implement;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem7568 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] rank = new int[N];
        int[] weight = new int[N];
        int[] height = new int[N];

        StringTokenizer st;
        for(int i=0; i<N; i++){
            st = new StringTokenizer(br.readLine()," ");
            weight[i] = Integer.parseInt(st.nextToken());
            height[i] = Integer.parseInt(st.nextToken());
        }



        for(int i=0; i<N; i++){
            int point = 1;
            for(int j=0; j<N; j++){
                if(weight[i]<weight[j] && height[i]<height[j]){
                    point++;
                }
            }
            rank[i] = point;
        }

        for(int i=0; i<N; i++){
            System.out.print(rank[i]+" ");
        }

    }
}
