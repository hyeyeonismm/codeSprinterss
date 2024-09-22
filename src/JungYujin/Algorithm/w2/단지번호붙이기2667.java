package JungYujin.Algorithm.w2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.Buffer;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Queue;

public class 단지번호붙이기2667 {
    static int n;
    static int[][] arr;
    static int[] dx = {-1,1,0,0};
    static int[] dy = {0,0,-1,1};
    static ArrayList<Integer> list = new ArrayList<>();
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());
        arr = new int[n][n];
        int total = 0;
        for(int i=0;i<n;i++){
            String s = br.readLine();
            for(int j=0;j<n;j++){
                arr[i][j] = s.charAt(j) - '0';
            }
        }
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(arr[i][j]==1) {
                    arr[i][j]=0;
                    int cnt = bfs(i,j);
                    list.add(cnt);
                    total++;
                }
            }
        }
        Collections.sort(list);
        System.out.println(total);
        for(int i=0;i<list.size();i++) System.out.println(list.get(i));
    }
    static int bfs(int x, int y){
        int cnt = 1;
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[] {x,y});
        while(!q.isEmpty()){
            int[] cur = q.poll();
            for(int i=0;i<4;i++){
                int newX = cur[0] + dx[i];
                int newY = cur[1] + dy[i];
                if(newX<0 || newX>=n || newY<0 || newY>=n) continue;;
                if(arr[newX][newY]==1) {
                    cnt++;
                    arr[newX][newY] = 0;
                    q.offer(new int[] {newX,newY});
                }
            }
        }
        return cnt;
    }
}
