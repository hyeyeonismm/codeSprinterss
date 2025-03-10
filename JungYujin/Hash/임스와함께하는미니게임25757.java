package Hash;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class 임스와함께하는미니게임25757 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        String game = st.nextToken();
        Set<String> set = new HashSet<>();
        for(int i=0;i<n;i++){
            st = new StringTokenizer(br.readLine());
            set.add(st.nextToken());
        }

        if(game.equals("Y")) System.out.println(set.size());
        else if(game.equals("F")) System.out.println(set.size()/2);
        else System.out.println(set.size()/3);
    }
}
