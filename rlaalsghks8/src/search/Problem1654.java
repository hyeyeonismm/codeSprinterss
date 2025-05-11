package search;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Problem1654 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()," ");

        int K = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());

        int[] lines = new int[K];

        for(int i=0; i<K; i++){
            lines[i] = Integer.parseInt(br.readLine());
        }

        Arrays.sort(lines);

        long right = lines[K-1];
        long left = 1;
        long count,mid;

        while(left<=right){
            count = 0;
            mid = (left+right)/2;

            for(int i=0; i<K ; i++){
                count +=lines[i]/mid;

            }

            if(count<N) //작으면 right를 mid로 땡기고
                right = mid-1;
            else    //크면 left를 mid로 땡긴다.
                left = mid+1;
        }

        System.out.println(right);
    }
}
