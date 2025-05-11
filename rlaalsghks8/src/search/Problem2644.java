package search;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

//촌수계산
public class Problem2644 {
    static int me,family,N;
    static int[][] familyList;
    static int[] dist;


    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        N = Integer.parseInt(br.readLine());

        familyList = new int[N+1][N+1];
        dist = new int[N+1];

        st = new StringTokenizer(br.readLine());
        me = Integer.parseInt(st.nextToken());
        family = Integer.parseInt(st.nextToken());

        int relation = Integer.parseInt(br.readLine());

        for(int i =0; i<relation; i++){
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());

            familyList[x][y] = familyList[y][x] = 1;
        }
        bfs(me);

        if(dist[family]==0){
            System.out.print(-1);
        }else{
            System.out.print(dist[family]);
        }



    }

    private static void bfs(int x){
        Queue<Integer> q = new LinkedList<>();
        q.add(x);
        dist[x] = 0;

        while(!q.isEmpty()){
            int nx=q.poll();

            for(int i=0; i<=N; i++){
                if(familyList[nx][i] ==1 && dist[i]==0){
                    q.add(i);
                    dist[i]=dist[nx]+1;
                }
            }
        }

    }
}
