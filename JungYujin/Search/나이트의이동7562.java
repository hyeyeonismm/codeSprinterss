package Search;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 나이트의이동7562 {
    static int[][] arr;
    static int n;
    static int[] dx = {-2,-2,-1,1,2,2,-1,1};
    static int[] dy = {-1,1,-2,-2,-1,1,2,2};
    static int[][] visited;
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int tc = Integer.parseInt(br.readLine());
        for(int i=0;i<tc;i++){
            n = Integer.parseInt(br.readLine());
            arr = new int[n][n];
            visited = new int[n][n];
            st = new StringTokenizer(br.readLine());
            int from_a = Integer.parseInt(st.nextToken());
            int from_b = Integer.parseInt(st.nextToken());
            st = new StringTokenizer(br.readLine());
            int to_a = Integer.parseInt(st.nextToken());
            int to_b = Integer.parseInt(st.nextToken());
            int result = bfs(from_a, from_b, to_a, to_b);
            System.out.println(result);
        }
    }
    static int bfs(int from_a, int from_b, int to_a, int to_b){
        if(from_a==to_a && from_b==to_b) return 0;
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{from_a,from_b});
        visited[from_a][from_b] = 1;
        while(!q.isEmpty()){
            int[] cur = q.poll();
            if(cur[0]==to_a && cur[1]==to_b) return arr[cur[0]][cur[1]];
            for(int i=0;i<8;i++){
                int new_a = cur[0]+dx[i];
                int new_b = cur[1]+dy[i];
                if(new_a <0 || new_a >=n || new_b <0 || new_b>=n) continue;
                if(visited[new_a][new_b]==0){
                    arr[new_a][new_b] = arr[cur[0]][cur[1]] + 1;
                    visited[new_a][new_b] = 1;
                    q.offer(new int[]{new_a,new_b});
                }
            }
        }
        return 0;
    }
}
