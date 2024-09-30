package Search;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 바이러스2606 {
    static int vertex;
    static int[][] arr;
    static int[] visited;
    static int cnt;
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(br.readLine());
        vertex = Integer.parseInt(st.nextToken());
        arr = new int[n+1][n+1];
        visited = new int[n+1];
        cnt = 0;
        for(int i=0;i<vertex;i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            arr[a][b] = 1;
            arr[b][a] = 1;
        }
        dfs(1);
        System.out.println(cnt);
    }
    static void dfs(int v){
        visited[v] = 1;
        for(int i=1;i<arr.length;i++){
            if(arr[v][i]==1 && visited[i]==0) {
                cnt++;
                dfs(i);
            }
        }
    }
}
