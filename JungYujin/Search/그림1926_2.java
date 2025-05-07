package Search;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 그림1926_2 {
    static int[][] arr;
    static int n, m, cnt, max;
    static Queue<int[]> q = new LinkedList<>();
    static int[][] check;
    static int[] dn = {-1,1,0,0};
    static int[] dm = {0,0,-1,1};
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        arr = new int[n][m];
        check = new int[n][m];
        cnt = 0;
        max = 0;

        for(int i=0;i<n;i++){
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<m;j++){
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(arr[i][j]==1 && check[i][j]==0) {
                    bfs(i,j);
                    cnt++;
                }
            }
        }

        System.out.println(cnt);
        System.out.println(max);
    }

    static void bfs(int a, int b){
        check[a][b] = 1;
        q.offer(new int[]{a,b});
        int size = 1;
        while(!q.isEmpty()){
            int[] cur = q.poll();
            for(int i=0;i<4;i++){
                int newN = cur[0] + dn[i];
                int newM = cur[1] + dm[i];
                if(newN>n-1 || newN<0 || newM>m-1 || newM<0) continue;
                if(arr[newN][newM]==1 && check[newN][newM]==0){
                    check[newN][newM] = 1;
                    q.offer(new int[]{newN, newM});
                    size++;
                }
            }
        }
        max = Math.max(max, size);
    }
}
