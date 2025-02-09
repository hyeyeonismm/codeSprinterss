package search;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem1926 {
    static int n,m;
    static int[][] pictures;
    static boolean[][] visited;
    static int picture_size;


    public static void main(String[] args)throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine()," ");
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        pictures = new int[n][m];
        visited = new boolean[n][m];
        int max = 0;
        int picCount = 0;


        for(int i=0; i<n; i++){
            st = new StringTokenizer(br.readLine());
            for(int j=0; j<m; j++){
                pictures[i][j] = Integer.parseInt(st.nextToken());

            }
        }

        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                picture_size = 0;
                if(!visited[i][j] && pictures[i][j] ==1){
                    int picture_size = dfs(i,j);
                    max = Math.max(max,picture_size);
                    picCount++;
                }
            }
        }

        System.out.println(picCount);
        System.out.println(max);
        br.close();



    }

    static int dfs(int x, int y){
        visited[x][y] = true;
        int dx[] = {0,0,1,-1};
        int dy[] = {1,-1,0,0};

        int size = 1;

        for(int i = 0; i<4; i++){
            int nx = x + dx[i];
            int ny = y + dy[i];
            if(nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny] && pictures[nx][ny]==1){
                size+=dfs(nx,ny);
            }
        }
        return size;
    }
}
