package sort;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashMap;
import java.util.StringTokenizer;

public class Problem18870 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] arr = new int[N];
        int[] arrSort = new int[N];

        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();

        StringTokenizer st = new StringTokenizer(br.readLine()," ");
        for(int i=0; i<N; i++){
            arrSort[i] = arr[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(arrSort);

        int rank = 0;
        for(int i : arrSort){
            if(!map.containsKey(i)){
                map.put(i,rank);
                rank++;
            }
        }

        StringBuilder sb = new StringBuilder();
        for(int k : arr){
            int rankScore = map.get(k);
            sb.append(rankScore).append(' ');
        }

        System.out.print(sb);

    }
}
