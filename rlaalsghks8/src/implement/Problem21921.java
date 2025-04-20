package implement;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem21921 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine()," ");
        int N = Integer.parseInt(st.nextToken());
        int X = Integer.parseInt(st.nextToken());
        int[] count = new int[N];
        StringTokenizer people = new StringTokenizer(br.readLine()," ");
        for(int i=0; i<N; i++){
            count[i] = Integer.parseInt(people.nextToken());
        }


        int sum = 0;
        for(int i=0; i<X; i++){
            sum +=count[i];
        }

        int max = sum;
        int gugan = 1;
        for(int i=X; i<N; i++){
            sum = sum - count[i-X] + count[i];
            if(sum>max){
                max = sum;
                gugan = 1;
            }
            else if(sum==max){
                gugan++;
            }


        }
        if(max==0){
            System.out.print("SAD");
        }else{
            System.out.println(max);
            System.out.print(gugan);
        }


    }

}
