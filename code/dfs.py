from manim import *

class DFS(Scene):
    label_kwarg = {
            "color" : BLACK,
            "fill_opacity" : 1
        }
    table_kwarg = {
        "include_outer_lines" : True,
    }
    def construct(self):
        #Title
        title = Text("Depth First Search")
        self.play(DrawBorderThenFill(title))
        self.wait(2)
        self.play(FadeOut(title))

        #Initialize Graph
        vertices = [1, 2, 3, 4, 5, 6]
        edges = [(1,2), (1,3), (1,5), (3,4), (4,5), (5,6)]
    
        label_conf = {1 : Text("1", **self.label_kwarg), 2 : Text("2", **self.label_kwarg), 3 : Text("3", **self.label_kwarg),
        4 : Text("4", **self.label_kwarg), 5 : Text("5", **self.label_kwarg), 6 : Text("6", **self.label_kwarg)}

        vertex_conf = {"color" : WHITE, "fill_opacity" : 0.4}

        edge_conf = {"stroke_width" : 4}

        graph = Graph(vertices, edges, layout="spring", labels=label_conf, vertex_config = vertex_conf, edge_config = edge_conf).scale(1.5).to_edge(LEFT, buff=1)
    
        #Create tables
        st_list = [Text("1", color=BLACK), Text("2", color=BLACK), Text("3", color=BLACK), Text("4", color=BLACK), Text("5", color=BLACK), Text("6", color=BLACK)]
        st_mat = MobjectTable([st_list], **self.table_kwarg).scale(0.5).to_corner(RIGHT+UP, buff=1)
        st_title = Text("Stack").scale(0.5).next_to(st_mat, DOWN)

        vis_mat = st_mat.copy().next_to(st_title, DOWN*3)
        vis_title = Text("Visited").scale(0.5).next_to(vis_mat, DOWN)

        #Create Output String
        op_title = Text("Output: ").scale(0.5)
        op_ans = Text("4 3 1 2 5 6", color = BLACK).scale(0.5)

        op = VGroup(op_title, op_ans).arrange(direction = RIGHT).next_to(vis_title, DOWN*3)

        
        #Create Legend
        yellow_label = Dot(color = YELLOW, fill_opacity = 0.4).scale(1.5)
        red_label = Dot(color = RED, fill_opacity = 0.4).scale(1.5)
        blue_label = Dot(color = BLUE, fill_opacity = 0.4).scale(1.5)

        k1 = VGroup(yellow_label, Text("- Current vertex").scale(0.5)).arrange()
        k2 = VGroup(red_label, Text("- Explore neighbors").scale(0.5)).arrange()
        k3 = VGroup(blue_label, Text("- All neighbors explored").scale(0.5)).arrange()

        key = VGroup(k1, k2, k3).arrange(direction = DOWN, center = False).next_to(op, DOWN*3)

        #Creation Animation
        self.play(Create(graph), run_time = 3.5)
        self.play(Create(st_mat), Write(st_title), Create(vis_mat), Write(vis_title), Create(key), Write(op))
        self.wait(2)
        
        # Use this to animate stack, array values
        # self.play(Transform(st_mat.get_entries_without_labels((1,2)), Text("X").scale(0.5).move_to(st_mat.get_entries_without_labels((1,2)).get_center())))
           
        #V4
        self.play(graph[4].animate.set_fill(YELLOW))
        self.wait(1)
        
        t4 = Text("4").scale(0.5).move_to(st_mat.get_entries_without_labels((1,1)).get_center())
        t4v = t4.copy().move_to(vis_mat.get_entries_without_labels((1,4)).get_center())
        self.play(ReplacementTransform(graph[4].copy(), t4), ReplacementTransform(graph[4].copy(), t4v))
        self.wait(1)
        
        self.play(t4v.copy().animate.move_to(op_ans[0].get_center()))
        self.wait(1)
        
        #V3
        self.play(graph[3].animate.set_fill(BLUE))
        self.wait(1)
        self.play(graph[3].animate.set_fill(YELLOW), graph[4].animate.set_fill(RED))
        self.wait(1)
        
        t3 = Text("3").scale(0.5).move_to(st_mat.get_entries_without_labels((1,2)).get_center())
        t3v = t3.copy().move_to(vis_mat.get_entries_without_labels((1,3)).get_center())
        self.play(ReplacementTransform(graph[3].copy(), t3), ReplacementTransform(graph[3].copy(), t3v))
        self.wait(1)

        self.play(t3v.copy().animate.move_to(op_ans[1].get_center()))
        self.wait(1)
        
        #V1
        self.play(graph[1].animate.set_fill(BLUE))
        self.wait(1)
        self.play(graph[1].animate.set_fill(YELLOW), graph[3].animate.set_fill(RED))
        self.wait(1)

        t1 = Text("1").scale(0.5).move_to(st_mat.get_entries_without_labels((1,3)).get_center())
        t1v = t1.copy().move_to(vis_mat.get_entries_without_labels((1,1)).get_center())
        self.play(ReplacementTransform(graph[1].copy(), t1), ReplacementTransform(graph[1].copy(), t1v))
        self.wait(1)
        
        self.play(t1v.copy().animate.move_to(op_ans[2].get_center()))
        self.wait(1)

        #V2
        self.play(graph[2].animate.set_fill(BLUE))
        self.wait(1)
        self.play(graph[2].animate.set_fill(YELLOW), graph[1].animate.set_fill(RED))
        self.wait(1)
        
        t2 = Text("2").scale(0.5).move_to(st_mat.get_entries_without_labels((1,4)).get_center())
        t2v = t2.copy().move_to(vis_mat.get_entries_without_labels((1,2)).get_center())
        self.play(ReplacementTransform(graph[2].copy(), t2), ReplacementTransform(graph[2].copy(), t2v))
        self.wait(1)

        self.play(t2v.copy().animate.move_to(op_ans[3].get_center()))
        self.wait(1)
        
        #RV1
        self.play(graph[2].animate.set_fill(BLUE), graph[1].animate.set_fill(YELLOW), graph.edges[(1,2)].animate.set_color(WHITE))
        self.wait(1)
        
        self.play(Circumscribe(t2))
        self.play(Unwrite(t2))
        self.wait(1)

        #V5
        self.play(graph[5].animate.set_fill(BLUE))
        self.wait(1)
        self.play(graph[5].animate.set_fill(YELLOW), graph[1].animate.set_fill(RED))
        self.wait(1)

        t5 = Text("5").scale(0.5).move_to(st_mat.get_entries_without_labels((1,4)).get_center())
        t5v = t5.copy().move_to(vis_mat.get_entries_without_labels((1,5)).get_center())
        self.play(ReplacementTransform(graph[5].copy(), t5), ReplacementTransform(graph[5].copy(), t5v))
        self.wait(1)

        self.play(t5v.copy().animate.move_to(op_ans[4].get_center()))
        self.wait(1)

        #V6
        self.play(graph[6].animate.set_fill(BLUE))
        self.wait(1)
        self.play(graph[6].animate.set_fill(YELLOW), graph[5].animate.set_fill(RED))
        self.wait(1)

        t6 = Text("6").scale(0.5).move_to(st_mat.get_entries_without_labels((1,5)).get_center())
        t6v = t6.copy().move_to(vis_mat.get_entries_without_labels((1,6)).get_center())
        self.play(ReplacementTransform(graph[6].copy(), t6), ReplacementTransform(graph[6].copy(), t6v))
        self.wait(1)

        self.play(t6v.copy().animate.move_to(op_ans[5].get_center()))
        self.wait(1)

        #RV5
        self.play(graph[6].animate.set_fill(BLUE), graph[5].animate.set_fill(YELLOW))
        self.wait(1)

        self.play(Circumscribe(t6))
        self.play(Unwrite(t6))
        self.wait(1)

        #RV1
        self.play(graph[5].animate.set_fill(BLUE), graph[1].animate.set_fill(YELLOW))
        self.wait(1)

        self.play(Circumscribe(t5))
        self.play(Unwrite(t5))
        self.wait(1)
    
        #RV3
        self.play(graph[1].animate.set_fill(BLUE), graph[3].animate.set_fill(YELLOW))
        self.wait(1)

        self.play(Circumscribe(t1))
        self.play(Unwrite(t1))
        self.wait(1)
        
        #RV4
        self.play(graph[3].animate.set_fill(BLUE), graph[4].animate.set_fill(YELLOW))
        self.wait(1)

        self.play(Circumscribe(t3))
        self.play(Unwrite(t3))
        self.wait(1)
        
        #Finish
        self.play(graph[4].animate.set_fill(BLUE))
        self.wait(1)
        
        self.play(Circumscribe(t4))
        self.play(Unwrite(t4))
        self.wait(2)