package Search;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 연결요소개수11724 {
    static int n;
    static int m;
    static int[][] arr;
    static int[] visited;
    static int cnt = 0;
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        arr = new int[n+1][n+1];
        visited = new int[n+1];
        for(int i=0;i<m;i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            arr[a][b] = 1;
            arr[b][a] = 1;
        }
        for(int i=1;i<=n;i++){
            if(visited[i]==0) bfs(i);
        }
        System.out.println(cnt);
    }
    static void bfs(int v){
        Queue<Integer> q = new LinkedList<>();
        q.offer(v);
        visited[v] = 1;
        while(!q.isEmpty()){
            int vv = q.poll();
            for(int i=1;i<=n;i++){
                if(arr[vv][i]==1 && visited[i]==0) {
                    q.offer(i);
                    visited[i] = 1;
                }
            }
        }
        cnt++;
    }
}
