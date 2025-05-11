package search;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem2512 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] region = new int[N];
        int sum = 0;
        int max = 0;
        StringTokenizer st = new StringTokenizer(br.readLine()," ");
        for(int i=0; i<N; i++){
            region[i] = Integer.parseInt(st.nextToken());
            sum +=region[i];
            max = Math.max(max,region[i]);
        }

        int totalMoney = Integer.parseInt(br.readLine());



        if(sum <=totalMoney){
            System.out.print(max);
            return;
        }

        int left = 0;
        int right = max;
        int answer = 0;
        while(left<=right){
            int mid = (left + right) / 2;
            int check = 0;
            for(int budget: region){
                check += Math.min(budget,mid);
            }
            if(check<=totalMoney){
                answer = mid;
                left = mid + 1;
            }else{
                right = mid -1;
            }
        }
        System.out.print(answer);
    }
}
