package w1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class 미로찾기2178 {
    static int[][] map;
    static int n;
    static int m;
    static boolean[][] visited;
    static int[] dx = {-1,1,0,0};
    static int[] dy = {0,0,-1,1};
    static Queue<int[]> q;
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        map = new int[n][m];
        map[0][0] = 1;
        visited = new boolean[n][m];
        q = new LinkedList<>();
        for(int i=0;i<n;i++){
            String s = br.readLine();
            for(int j=0;j<m;j++){
                map[i][j] = s.charAt(j) - '0';
            }
        }

        visited[0][0] = true;
        bfs(0,0);
        System.out.println(map[n-1][m-1]);
    }

    static void bfs(int x,int y){
        q.offer(new int[] {x,y});
        while(!q.isEmpty()){
            int[] current = q.poll();
            int curX = current[0];
            int curY = current[1];

            for(int i=0;i<4;i++){
                int newX = curX + dx[i];
                int newY = curY + dy[i];

                if(newX<0 || newX>=n || newY<0 || newY>=m) {continue;}
                if(visited[newX][newY]==true || map[newX][newY]==0) {continue;}

                q.offer(new int[] {newX,newY});
                map[newX][newY] = map[curX][curY] + 1;
                visited[newX][newY] = true;
            }
        }
    }
}

