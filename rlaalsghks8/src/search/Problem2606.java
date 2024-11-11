package search;

import java.util.*;
import java.io.*;

public class Problem2606{
    static int result = 0;
    static int network[][];
    static int visited[];
    static int computer;
    static int link;
    public static void main(String args[])throws Exception{

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        computer = Integer.parseInt(br.readLine());
        link = Integer.parseInt(br.readLine());
        network = new int[computer+1][computer+1];
        visited = new int[computer+1];

        for(int i=0; i<link; i++){
            st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            network[x][y] = 1;
            network[y][x] = 1;

        }

        DFS(1);
        System.out.println(result);


    }

    static void DFS(int idx){
        visited[idx] = 1;

        for(int i=1; i<computer+1; i++){
            if(network[idx][i] == 1 && visited[i] == 0){
                DFS(i);
                result++;
            }
        }
    }
}
