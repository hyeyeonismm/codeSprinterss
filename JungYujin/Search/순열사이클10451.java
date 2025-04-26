package Search;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class 순열사이클10451 {
    static int[] arr;
    static int[] check;
    static int node;
    static int cycle = 0;
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int test = Integer.parseInt(br.readLine());
        StringTokenizer st;
        for(int t=0;t<test;t++){
            node = Integer.parseInt(br.readLine());
            arr = new int[node+1];
            check = new int[node+1];
            st = new StringTokenizer(br.readLine());
            for(int i=1;i<=node;i++){
                arr[i] = Integer.parseInt(st.nextToken());
            }
            for(int index=1;index<=node;index++){
                if(check[index]==0){
                    dfs(index);
                    cycle++;

                }
            }
            System.out.println(cycle);
            cycle = 0;
        }
    }
    static void dfs(int start){
        check[start] = 1;
        while(check[arr[start]]==0){
            dfs(arr[start]);
        }
    }
}
