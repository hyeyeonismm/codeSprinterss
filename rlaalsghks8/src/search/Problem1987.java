package search;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Problem1987 {


    public class Main{
        static int[][] arr;
        static boolean[] visit = new boolean[26];
        static int[] dx = {1,-1,0,0};
        static int[] dy = {0,0,1,-1};
        static int ans = 0;
        static int R,C;

        public static void main(String[] args)throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

            StringTokenizer st = new StringTokenizer(br.readLine()," ");

            R = Integer.parseInt(st.nextToken());
            C = Integer.parseInt(st.nextToken());

            arr = new int[R][C];



            for(int i=0; i<R; i++){
                String str = br.readLine();
                for(int j=0; j<C; j++){
                    arr[i][j] = str.charAt(j)-'A';
                }
            }


            dfs(0,0,1);

            System.out.println(ans);




        }

        public static void dfs(int x, int y, int count){
            visit[arr[x][y]] = true;
            ans = Math.max(ans,count);

            for(int i=0; i<4; i++){
                int cx = x + dx[i];
                int cy = y + dy[i];
                if(cx>=0 && cy>=0 && cx<R && cy<C){
                    if(!visit[arr[cx][cy]]){
                        dfs(cx,cy,count+1);
                    }
                }
            }
            visit[arr[x][y]] = false;
        }
    }

}
