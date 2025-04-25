package Implementation;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class 평균1546 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int[] score = new int[n];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i=0;i<n;i++) score[i] = Integer.parseInt(st.nextToken());
        int max = Arrays.stream(score).max().getAsInt();
        double sum = 0;
        for(int i=0;i<n;i++) sum += (double)score[i]/max*100;
        System.out.println(sum/n);
    }
}
