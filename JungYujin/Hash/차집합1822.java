package Hash;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;
import java.util.TreeSet;

public class 차집합1822 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());

        Set<Integer> tree = new TreeSet<>();
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<a;i++){
            tree.add(Integer.parseInt(st.nextToken()));
        }
        st = new StringTokenizer(br.readLine());
        for(int i=0;i<b;i++){
            int num = Integer.parseInt(st.nextToken());
            if(tree.contains(num)) tree.remove(num);
        }

        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        bw.append(tree.size()+"\n");
        for(int n : tree) bw.append(n+" ");

        bw.flush();
    }
}
