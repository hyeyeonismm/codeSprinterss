package implement;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedHashMap;
import java.util.StringTokenizer;

public class Problem13414 {
    public static void main(String[] args)throws IOException {

        LinkedHashMap<String, Integer> map = new LinkedHashMap<>();

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine()," ");
        int K = Integer.parseInt(st.nextToken());
        int L = Integer.parseInt(st.nextToken());

        for(int i=0; i<L; i++){
            String stNum = br.readLine();
            map.remove(stNum);
            map.put(stNum,i);
        }

        int count = 0;
        for(String id : map.keySet()){
            System.out.println(id);
            count++;
            if(count==K)
                break;
        }



    }
}
