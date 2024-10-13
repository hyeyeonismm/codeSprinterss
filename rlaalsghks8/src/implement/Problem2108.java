package implement;

import java.util.*;
import java.io.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Problem2108{
    public static void main(String args[]) throws IOException{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int [] arr = new int[N];
        int sum = 0;
        int freq = 0;



        for(int i=0; i<N; i++){
            arr[i] = Integer.parseInt(br.readLine());
            sum += arr[i];
        }

        Arrays.sort(arr);

        System.out.println(Math.round((double)sum/N));
        System.out.println(arr[N/2]);
        System.out.println(frequence(arr));
        System.out.println(arr[N-1]-arr[0]);

    }

    static int frequence(int[] list) {
        int cnt[] = new int[8001];
        int max = 0;
        for(int i=0; i<list.length; i++) {
            cnt[list[i]+4000]++;
            max = Math.max(cnt[list[i]+4000], max);
        }
        ArrayList<Integer> max_idx = new ArrayList<>();
        for(int i=0; i<=8000; i++)
            if(max == cnt[i])
                max_idx.add(i-4000);
        return max_idx.size()>1? max_idx.get(1) : max_idx.get(0);

    }
}
