package bruteforce;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Problem3085 {
    static char[][] arr;
    static int N;
    static int max = 1;
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        arr = new char[N][N];

        for(int i=0; i<N; i++){
            String line = br.readLine();
            for(int j=0; j<N; j++){
                arr[i][j] = line.charAt(j);
            }
        }

        //행 교환
        for(int i=0; i<N-1; i++){
            for(int j=0; j<N-1; j++){
                swap(i,j, i,j+1);
                count();
                swap(i,j+1,i,j);
            }
        }

        //열 교환
        for(int i=0; i<N-1; i++){
            for(int j=0; j<N; j++){
                swap(i,j,i+1,j);
                count();
                swap(i+1,j,i,j);
            }
        }

        System.out.print(max);
        br.close();




    }

    public static void swap(int x1, int y1, int x2, int y2){
        char temp = arr[x1][y1];
        arr[x1][y1] = arr[x2][y2];
        arr[x2][y2] = temp;
    }

    public static void count(){

        for(int i=0; i<N; i++){
            int count = 1;
            for(int j=0; j<N-1; j++){
                if(arr[i][j]==arr[i][j+1]){
                    count++;
                    max = Math.max(count,max);
                }else{
                    count = 1;
                }
            }
        }

        for(int i=0; i<N; i++){
            int count = 1;
            for(int j=0; j<N-1; j++){
                if(arr[j][i]== arr[j+1][i]){
                    count++;
                    max = Math.max(count,max);
                }else{
                    count = 1;
                }
            }
        }
    }
}
