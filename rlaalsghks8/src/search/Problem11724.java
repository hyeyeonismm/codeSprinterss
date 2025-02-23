package search;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Problem11724 {
    static int N,M;
    static int[][] board;
    static boolean[] visited;
    static int count = 0;

    public static void main(String[] args)throws IOException {
        BufferedReader br =new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine()," ");

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());



        board = new int[N+1][N+1];
        visited = new boolean[N+1];


        for(int i=1; i<=M; i++){
            st = new StringTokenizer(br.readLine()," ");
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());

            board[x][y] = 1;
            board[y][x] = 1;

        }

        for(int i=1; i<=N; i++){
            if(!visited[i]){
                bfs(i);
                count++;
            }
        }

        System.out.print(count);

    }

    public static void bfs(int start){
        Queue<Integer> q = new LinkedList<>();
        visited[start] = true;
        q.offer(start);
        while(!q.isEmpty()){
            int s = q.poll();
            for(int i=1; i<=N; i++){
                if(board[s][i]==1 && !visited[i]){
                    q.offer(i);
                    visited[i] = true;
                }
            }

        }
    }
}
