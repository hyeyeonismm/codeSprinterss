package implement;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;

public class Problem1735 {
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));


        int[][] arr = new int[2][2];

        for(int i=0; i<2; i++){
            StringTokenizer st = new StringTokenizer(br.readLine()," ");
            for(int j=0; j<2; j++){
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        int up = arr[0][0] * arr[1][1] + arr[1][0] * arr[0][1];
        int down = arr[0][1] * arr[1][1];

        ArrayList<Integer> answerUp = new ArrayList<>();
        ArrayList<Integer> answerDown = new ArrayList<>();

        for(int i=1; i<=down; i++){
            if(down%i==0 && up%i==0){
                int element = i;
                answerUp.add(up/i);
                answerDown.add(down/i);
            }

        }

        Collections.sort(answerUp);
        Collections.sort(answerDown);

        System.out.println(answerUp.get(0));
        System.out.print(answerDown.get(0));

        br.close();

    }
}
