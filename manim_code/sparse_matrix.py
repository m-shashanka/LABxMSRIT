from manim import *

class Sparse(Scene):
    table_kwarg = {
        "include_outer_lines" : True,
    }
    label_kwarg = {
            "color" : BLACK,
            "fill_opacity" : 1
    }
    def construct(self):
        #Title
        title = Text("Fast Transpose of Sparse Matrix")
        self.play(DrawBorderThenFill(title))
        self.wait(2)
        self.play(FadeOut(title))

        #Create A
        A = Matrix([[0, 5, 0, 6], [2, 0, 4, 0], [0, 0, 7, 0]])
        Aent = A.get_entries()
        Atitle = Text("A = ").next_to(A, LEFT)
        Agroup = VGroup(A, Atitle)
        self.play(Create(Agroup))
        self.wait(2)
        self.play(Agroup.animate.scale(0.5))
        self.play(Agroup.animate.to_corner(UP+LEFT))
        self.wait(2)

        #Create B
        B = MobjectTable(
            [[Text("3", color=BLACK), Text("4", color=BLACK), Text("5", color=BLACK)],
            [Text("0", color=BLACK), Text("1", color=BLACK), Text("5", color=BLACK)],
            [Text("0", color=BLACK), Text("3", color=BLACK), Text("6", color=BLACK)],
            [Text("1", color=BLACK), Text("0", color=BLACK), Text("2", color=BLACK)],
            [Text("1", color=BLACK), Text("2", color=BLACK), Text("4", color=BLACK)],
            [Text("2", color=BLACK), Text("2", color=BLACK), Text("7", color=BLACK)]] ,
            col_labels=[Text("Row"), Text("Col"), Text("Val")], include_outer_lines=True, line_config={"color": WHITE}).scale(0.5)
        Btitle = Text("B = ").next_to(B, LEFT)
        Bgroup = VGroup(B, Btitle)
        self.play(Create(Bgroup))
        self.wait(2)

        #Fill B
        rowArrow = DoubleArrow(start = A.get_bottom(), end = A.get_top()).next_to(A, RIGHT)
        self.play(Create(rowArrow))
        self.wait(1)
        tb00 = Text("3").scale(0.5).move_to(B.get_entries_without_labels((1,1)).get_center())
        self.play(ReplacementTransform(rowArrow, tb00))
        self.wait(1)

        colArrow = DoubleArrow(start = A.get_left(), end = A.get_right()).next_to(A, DOWN)
        self.play(Create(colArrow))
        self.wait(1)
        tb01 = Text("4").scale(0.5).move_to(B.get_entries_without_labels((1,2)).get_center())
        self.play(ReplacementTransform(colArrow, tb01))
        self.wait(1)

        self.play(Circumscribe(Aent[1]), Circumscribe(Aent[3]), Circumscribe(Aent[4]), Circumscribe(Aent[6]), Circumscribe(Aent[10]))
        self.wait(1)
        tb02 = Text("5").scale(0.5).move_to(B.get_entries_without_labels((1,3)).get_center())
        self.play(ReplacementTransform(VGroup(Aent[1].copy(), Aent[3].copy(), Aent[4].copy(), Aent[6].copy(), Aent[10].copy()), tb02))
        self.wait(1)

        self.play(Circumscribe(Aent[1]))
        self.wait(1)
        tb10 = Text("0").scale(0.5).move_to(B.get_entries_without_labels((2,1)).get_center())
        tb11 = Text("1").scale(0.5).move_to(B.get_entries_without_labels((2,2)).get_center())
        tb12 = Text("5").scale(0.5).move_to(B.get_entries_without_labels((2,3)).get_center())
        self.play(ReplacementTransform(Aent[1].copy(), VGroup(tb10, tb11, tb12)))
        self.wait(1)

        self.play(Circumscribe(Aent[3]))
        self.wait(1)
        tb20 = Text("0").scale(0.5).move_to(B.get_entries_without_labels((3,1)).get_center())
        tb21 = Text("3").scale(0.5).move_to(B.get_entries_without_labels((3,2)).get_center())
        tb22 = Text("6").scale(0.5).move_to(B.get_entries_without_labels((3,3)).get_center())
        self.play(ReplacementTransform(Aent[3].copy(), VGroup(tb20, tb21, tb22)))
        self.wait(1)

        self.play(Circumscribe(Aent[4]))
        self.wait(1)
        tb30 = Text("1").scale(0.5).move_to(B.get_entries_without_labels((4,1)).get_center())
        tb31 = Text("0").scale(0.5).move_to(B.get_entries_without_labels((4,2)).get_center())
        tb32 = Text("2").scale(0.5).move_to(B.get_entries_without_labels((4,3)).get_center())
        self.play(ReplacementTransform(Aent[4].copy(), VGroup(tb30, tb31, tb32)))
        self.wait(1)

        self.play(Circumscribe(Aent[6]))
        self.wait(1)
        tb40 = Text("1").scale(0.5).move_to(B.get_entries_without_labels((5,1)).get_center())
        tb41 = Text("2").scale(0.5).move_to(B.get_entries_without_labels((5,2)).get_center())
        tb42 = Text("4").scale(0.5).move_to(B.get_entries_without_labels((5,3)).get_center())
        self.play(ReplacementTransform(Aent[6].copy(), VGroup(tb40, tb41, tb42)))
        self.wait(1)

        self.play(Circumscribe(Aent[10]))
        self.wait(1)
        tb50 = Text("2").scale(0.5).move_to(B.get_entries_without_labels((6,1)).get_center())
        tb51 = Text("2").scale(0.5).move_to(B.get_entries_without_labels((6,2)).get_center())
        tb52 = Text("7").scale(0.5).move_to(B.get_entries_without_labels((6,3)).get_center())
        self.play(ReplacementTransform(Aent[10].copy(), VGroup(tb50, tb51, tb52)))
        self.wait(2)

        Bgroup = VGroup(B, Btitle, tb00, tb01, tb02, tb10, tb11, tb12, tb20, tb21, tb22, tb30, tb31, tb32, tb40, tb41, tb42, tb50, tb51, tb52)
        self.play(Bgroup.animate.scale(0.8))
        self.play(Bgroup.animate.to_corner(LEFT+DOWN))
        self.wait(1)

        #Create Total and Index Arrays
        index = MobjectTable(
            [[Text("1", color=BLACK)],
            [Text("2", color=BLACK)],
            [Text("3", color=BLACK)],
            [Text("5", color=BLACK)],
            [Text("6", color=BLACK)]],
            include_outer_lines=True, line_config={"color": WHITE}).scale(0.5)
        index_title = Text("index").scale(0.4).next_to(index, UP)
        index_exp0 = Text("index[0]=1").scale(0.4).next_to(index, DOWN)
        index_exp1 = Text("index[i]=index[i-1]+total[i-1]").scale(0.4).next_to(index_exp0, DOWN)
        indexgroup = VGroup(index_title, index, index_exp0, index_exp1)
        indexgroup.to_edge(RIGHT)

        total = MobjectTable(
            [[Text("1", color=BLACK)],
            [Text("1", color=BLACK)],
            [Text("2", color=BLACK)],
            [Text("1", color=BLACK)]],
            include_outer_lines=True, line_config={"color": WHITE}).scale(0.5)
        total_title = Text("total").scale(0.4).next_to(total, UP)
        total_exp = Paragraph("total[i] = no. of non-zero", "entries in col i of A").scale(0.4).next_to(total, DOWN)
        totalgroup = VGroup(total_title, total, total_exp)
        totalgroup.next_to(indexgroup, LEFT)
        self.play(Create(index), Write(index_exp0), Write(index_exp1), Write(index_title), Create(total), Write(total_exp), Write(total_title))
        self.wait(2)

        #Fill total array
        total0 = Text("1").scale(0.5).move_to(total.get_entries_without_labels((1,1)).get_center())
        total1 = Text("1").scale(0.5).move_to(total.get_entries_without_labels((2,1)).get_center())
        total2 = Text("2").scale(0.5).move_to(total.get_entries_without_labels((3,1)).get_center())
        total3 = Text("1").scale(0.5).move_to(total.get_entries_without_labels((4,1)).get_center())
        Acols = A.get_columns()

        self.play(Circumscribe(Acols[0]))
        self.wait(1)
        self.play(ReplacementTransform(Aent[4].copy(), total0))
        self.wait(1)

        self.play(Circumscribe(Acols[1]))
        self.wait(1)
        self.play(ReplacementTransform(Aent[1].copy(), total1))
        self.wait(1)

        self.play(Circumscribe(Acols[2]))
        self.wait(1)
        self.play(ReplacementTransform(VGroup(Aent[6].copy(), Aent[10].copy()), total2))
        self.wait(1)

        self.play(Circumscribe(Acols[3]))
        self.wait(1)
        self.play(ReplacementTransform(Aent[3].copy(), total3))
        self.wait(2)

        #Fill index array
        index0 = Text("1").scale(0.5).move_to(index.get_entries_without_labels((1,1)).get_center())
        index1 = Text("2").scale(0.5).move_to(index.get_entries_without_labels((2,1)).get_center())
        index2 = Text("3").scale(0.5).move_to(index.get_entries_without_labels((3,1)).get_center())
        index3 = Text("5").scale(0.5).move_to(index.get_entries_without_labels((4,1)).get_center())
        index4 = Text("6").scale(0.5).move_to(index.get_entries_without_labels((5,1)).get_center())

        self.play(Write(index0))
        self.wait(1)

        self.play(Circumscribe(total0), Circumscribe(index0))
        self.wait(1)
        self.play(ReplacementTransform(VGroup(total0.copy(), index0.copy()), index1))
        self.wait(1)
        
        self.play(Circumscribe(total1), Circumscribe(index1))
        self.wait(1)
        self.play(ReplacementTransform(VGroup(total1.copy(), index1.copy()), index2))
        self.wait(1)

        self.play(Circumscribe(total2), Circumscribe(index2))
        self.wait(1)
        self.play(ReplacementTransform(VGroup(total2.copy(), index2.copy()), index3))
        self.wait(1)

        self.play(Circumscribe(total3), Circumscribe(index3))
        self.wait(1)
        self.play(ReplacementTransform(VGroup(total3.copy(), index3.copy()), index4))
        self.wait(2)

        #Declutter the space
        self.play(Uncreate(totalgroup), Unwrite(index_exp0), Unwrite(index_exp1), Unwrite(total0), Unwrite(total1), Unwrite(total2), Unwrite(total3))
        totalgroup = VGroup(total, total_title)
        self.wait(1)
        indexgroup = VGroup(index, index_title, index0, index1, index2, index3, index4)
        self.play(indexgroup.animate.scale(0.8))
        self.play(indexgroup.animate.to_corner(UP+RIGHT))
        self.wait(1)

        BT = B.copy()
        BTtitle = Text("B' = ").scale(0.8).next_to(BT, LEFT)
        BTgroup = VGroup(BT, BTtitle).next_to(Bgroup, RIGHT)
        tbt00 = Text("4").scale(0.5).move_to(BT.get_entries_without_labels((1,1)).get_center())
        tbt01 = Text("3").scale(0.5).move_to(BT.get_entries_without_labels((1,2)).get_center())
        tbt02 = Text("5").scale(0.5).move_to(BT.get_entries_without_labels((1,3)).get_center())
        self.play(Create(BTgroup), Write(tbt00), Write(tbt01), Write(tbt02))
        self.wait(1)

        algo = Paragraph('For every row in B', '\tfind index[col]', '\tenter swapped tuple into B\'[index[col]]', '\tindex[col]++').scale(0.4).next_to(BT, UP*1.5)
        self.play(Write(algo))
        self.wait(2)

        #Fill B'

        Bent = B.get_rows()


        curr = SurroundingRectangle(Bent[2])
        self.play(Create(curr))
        self.wait(1)
        self.play(Circumscribe(B.get_entries_without_labels((2,2))))
        self.wait(1)
        self.play(Flash(index1))
        self.wait(1)
        tbt20 = Text("1").scale(0.5).move_to(BT.get_entries_without_labels((3,1)).get_center())
        tbt21 = Text("0").scale(0.5).move_to(BT.get_entries_without_labels((3,2)).get_center())
        tbt22 = Text("5").scale(0.5).move_to(BT.get_entries_without_labels((3,3)).get_center())
        self.play(Write(tbt20), Write(tbt21), Write(tbt22))
        self.wait(1)
        self.play(Flash(index1))
        self.wait(1)
        index11 = Text("3").scale(0.4).move_to(index.get_entries_without_labels((2,1)).get_center())
        self.play(ReplacementTransform(index1, index11))
        self.wait(1)

        next = SurroundingRectangle(Bent[3])
        self.play(ReplacementTransform(curr, next))
        self.wait(1)
        self.play(Circumscribe(B.get_entries_without_labels((3,2))))
        self.wait(1)
        self.play(Flash(index3))
        self.wait(1)
        tbt20 = Text("3").scale(0.5).move_to(BT.get_entries_without_labels((6,1)).get_center())
        tbt21 = Text("0").scale(0.5).move_to(BT.get_entries_without_labels((6,2)).get_center())
        tbt22 = Text("6").scale(0.5).move_to(BT.get_entries_without_labels((6,3)).get_center())
        self.play(Write(tbt20), Write(tbt21), Write(tbt22))
        self.wait(1)
        self.play(Flash(index3))
        self.wait(1)
        index31 = Text("6").scale(0.4).move_to(index.get_entries_without_labels((4,1)).get_center())
        self.play(ReplacementTransform(index3, index31))
        self.wait(1)

        curr = next
        next = SurroundingRectangle(Bent[4])
        self.play(ReplacementTransform(curr, next))
        self.wait(1)
        self.play(Circumscribe(B.get_entries_without_labels((4,2))))
        self.wait(1)
        self.play(Flash(index0))
        self.wait(1)
        tbt10 = Text("0").scale(0.5).move_to(BT.get_entries_without_labels((2,1)).get_center())
        tbt11 = Text("1").scale(0.5).move_to(BT.get_entries_without_labels((2,2)).get_center())
        tbt12 = Text("2").scale(0.5).move_to(BT.get_entries_without_labels((2,3)).get_center())
        self.play(Write(tbt10), Write(tbt11), Write(tbt12))
        self.wait(1)
        self.play(Flash(index0))
        self.wait(1)
        index01 = Text("2").scale(0.4).move_to(index.get_entries_without_labels((1,1)).get_center())
        self.play(ReplacementTransform(index0, index01))
        self.wait(1)

        curr = next
        next = SurroundingRectangle(Bent[5])
        self.play(ReplacementTransform(curr, next))
        self.wait(1)
        self.play(Circumscribe(B.get_entries_without_labels((5,2))))
        self.wait(1)
        self.play(Flash(index2))
        self.wait(1)
        tbt30 = Text("2").scale(0.5).move_to(BT.get_entries_without_labels((4,1)).get_center())
        tbt31 = Text("1").scale(0.5).move_to(BT.get_entries_without_labels((4,2)).get_center())
        tbt32 = Text("4").scale(0.5).move_to(BT.get_entries_without_labels((4,3)).get_center())
        self.play(Write(tbt30), Write(tbt31), Write(tbt32))
        self.wait(1)
        self.play(Flash(index2))
        self.wait(1)
        index21 = Text("4").scale(0.4).move_to(index.get_entries_without_labels((3,1)).get_center())
        self.play(ReplacementTransform(index2, index21))
        self.wait(1)

        curr = next
        next = SurroundingRectangle(Bent[6])
        self.play(ReplacementTransform(curr, next))
        self.wait(1)
        self.play(Circumscribe(B.get_entries_without_labels((6,2))))
        self.wait(1)
        self.play(Flash(index21))
        self.wait(1)
        tbt40 = Text("2").scale(0.5).move_to(BT.get_entries_without_labels((5,1)).get_center())
        tbt41 = Text("2").scale(0.5).move_to(BT.get_entries_without_labels((5,2)).get_center())
        tbt42 = Text("7").scale(0.5).move_to(BT.get_entries_without_labels((5,3)).get_center())
        self.play(Write(tbt40), Write(tbt41), Write(tbt42))
        self.wait(1)
        self.play(Flash(index21))
        self.wait(1)
        index22 = Text("5").scale(0.4).move_to(index.get_entries_without_labels((3,1)).get_center())
        self.play(ReplacementTransform(index21, index22))
        self.wait(1)
        self.play(Uncreate(next), Unwrite(algo))
        self.wait(1)

        #Print final matrix
        AT = Matrix([[0, 2, 0], [5, 0, 0], [0, 4, 7], [6, 0, 0]])
        ATtitle = Text("A' = ").next_to(AT, LEFT)
        ATgroup = VGroup(AT, ATtitle).scale(0.5).next_to(Agroup, RIGHT)
        res_arrow = Arrow(start = BT.get_top(), end = AT.get_bottom())
        self.play(Create(res_arrow))
        self.wait(1)
        self.play(Create(ATgroup))
        self.wait(2)