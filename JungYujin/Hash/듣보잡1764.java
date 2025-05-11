package Hash;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

public class 듣보잡1764 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        Set<String> d = new HashSet<>();
        for(int i=0;i<n;i++){
            d.add(br.readLine());
        }
        List<String> dpj = new ArrayList<>();
        for(int i=0;i<m;i++){
            String s = br.readLine();
            if(d.contains(s)) dpj.add(s);
        }
        System.out.println(dpj.size());
        Collections.sort(dpj);
        for(String s : dpj) System.out.println(s);
    }
}
