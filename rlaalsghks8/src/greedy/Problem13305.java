package greedy;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem13305 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());



        long[] roads = new long[N-1];
        long[] cities = new long[N];

        StringTokenizer st = new StringTokenizer(br.readLine()," ");
        for(int i=0; i<N-1; i++){
            roads[i] = Long.parseLong(st.nextToken());
        }

        st = new StringTokenizer(br.readLine()," ");
        for(int i=0; i<N; i++){
            cities[i] = Long.parseLong(st.nextToken());
        }

        long cost = cities[0]* roads[0];
        long min = cities[0];

        for(int i=1; i<N-1; i++){

            if(min>cities[i]){
                min = cities[i];
                cost += min * roads[i];
            }else{
                cost += min * roads[i];
            }


        }

        System.out.print(cost);
    }
}
