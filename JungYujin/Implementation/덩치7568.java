package Implementation;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 덩치7568 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int[][] arr = new int[n][2];
        int[] rank = new int[n];
        for(int i=0;i<n;i++) rank[i] = 1;
        for(int i=0;i<n;i++){
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            arr[i][0] = x;
            arr[i][1] = y;
        }

        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(arr[i][0]<arr[j][0] && arr[i][1]<arr[j][1]) rank[i] = rank[i]+1;
            }
        }

        for(int i=0;i<n;i++) System.out.print(rank[i]+" ");
    }
}
