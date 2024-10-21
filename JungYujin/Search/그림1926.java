package Search;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 그림1926 {
    static int n;
    static int m;
    static int[][] arr;
    static int max = 0;
    static int cnt = 0;
    static int[] dx = {-1,1,0,0};
    static int[] dy = {0,0,-1,1};
    static int[][] visited;
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        arr = new int[n][m];
        visited = new int[n][m];
        for(int i=0;i<n;i++){
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<m;j++){
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(arr[i][j]==1 && visited[i][j]==0){
                    int ret_cnt = bfs(i,j);
                    if(max<ret_cnt) max = ret_cnt;
                    cnt++;

                }
            }
        }

        System.out.println(cnt);
        System.out.println(max);


    }
    static int bfs(int a, int b){
        int ret_cnt = 1;
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{a,b});
        visited[a][b] = 1;
        while(!q.isEmpty()){
            int[] cur = q.poll();
            for(int i=0;i<4;i++){
                int newA = cur[0]+dx[i];
                int newB = cur[1]+dy[i];
                if(newA<0 || newA>=n || newB<0 || newB>=m) continue;
                if(visited[newA][newB]==0 && arr[newA][newB]==1) {
                    q.offer(new int[]{newA,newB});
                    visited[newA][newB] = 1;
                    ret_cnt++;
                }
            }

        }
        return ret_cnt;
    }
}
