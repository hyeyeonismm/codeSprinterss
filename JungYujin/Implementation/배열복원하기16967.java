package Implementation;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class 배열복원하기16967 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int h = Integer.parseInt(st.nextToken());
        int w = Integer.parseInt(st.nextToken());
        int x = Integer.parseInt(st.nextToken());
        int y = Integer.parseInt(st.nextToken());

        int[][] a = new int[h][w];
        int[][] b = new int[h + x][w + y];

        for (int i = 0; i < h + x; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < w + y; j++) b[i][j] = Integer.parseInt(st.nextToken());
        }

        for(int i=0;i<h;i++){
            for(int j=0;j<w;j++){
                if(i>=x && j>=y) a[i][j] = b[i][j]-a[i-x][j-y];
                else a[i][j] = b[i][j];
            }
        }

        //출력
        for (int i = 0; i < h; i++) {
            for (int j = 0; j < w; j++) {
                System.out.println(a[i][j]+" ");
            }
            System.out.println("\n");
        }

    }
}
