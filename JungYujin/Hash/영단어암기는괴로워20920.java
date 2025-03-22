package Hash;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.nio.Buffer;
import java.util.*;

public class 영단어암기는괴로워20920 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        HashMap<String, Integer> hp = new HashMap<>();
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        for(int i=0;i<n;i++){
            String s = br.readLine();
            if(s.length()<m) continue;
            hp.put(s,hp.getOrDefault(s,0)+1);
        }
        List<String> list = new ArrayList<>(hp.keySet());
        Collections.sort(list, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                if(Integer.compare(hp.get(o1),hp.get(o2))!=0){
                    return Integer.compare(hp.get(o2),hp.get(o1));
                }
                if(o1.length()!=o2.length()){
                    return Integer.compare(o2.length(),o1.length());
                }
                return o1.compareTo(o2);
            }
        });
        for(String s:list){
            bw.write(s+"\n");
        }
        bw.flush();
    }
}
