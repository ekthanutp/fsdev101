/src
├── components/                # [เฟส 1–3] ส่วนประกอบ UI ใช้ซ้ำได้
│   ├── TaskCard.jsx           # [เฟส 1] แสดงกล่องงาน
│   ├── AddTaskModal.jsx      # [เฟส 1] ฟอร์มเพิ่มงานใหม่
│   ├── ProjectCard.jsx       # [เฟส 2] กล่องแสดงโปรเจกต์
│   ├── KanbanColumn.jsx      # [เฟส 2] แสดงคอลัมน์ใน Kanban
│   └── GanttChart.jsx        # [เฟส 3] กราฟ Gantt ดูไทม์ไลน์
│
├── contexts/                 # [เฟส 1–3] แชร์ข้อมูลและ logic กลาง
│   ├── TaskContext.jsx       # [เฟส 1] จัดการข้อมูล task ทั้งหมด
│   └── ProjectContext.jsx    # [เฟส 2] จัดการข้อมูลโปรเจกต์
│
├── pages/                    # [เฟส 1–3] หน้า (Route) หลัก
│   ├── TasksPage.jsx         # [เฟส 1] หน้ารวม task ทั้งหมด
│   ├── TaskDetail.jsx        # [เฟส 1] หน้ารายละเอียดงาน
│   ├── ProjectsPage.jsx      # [เฟส 2] หน้ารวมโปรเจกต์
│   └── DashboardPage.jsx     # [เฟส 3] หน้ารวมแผนงาน
│
├── App.jsx                   # [เฟส 1] ตั้งค่า Router
├── main.jsx                  # [เฟส 1] Entry Point
└── index.css                 # [เฟส 1] สไตล์หลัก


เฟส 1: Mini Task Manager (React + MUI + Routing + State)

🎯 เป้าหมาย
มีหน้าแสดงรายการ Task
เพิ่ม / ลบ / แก้ไข Task ได้
แสดงรายละเอียด Task ใน Modal
มีหน้า Project และ Task แยกจากกัน
📘 บทเรียน 1: React Routing เบื้องต้น

สิ่งที่เรียน	เหตุผล
ติดตั้ง react-router-dom	แยกหน้า Project / Task
สร้าง Route หลายหน้า	/projects, /tasks
ใช้ <Link />, useNavigate()	นำทางระหว่างหน้า
Dynamic route: /tasks/:id	แสดงรายละเอียดงาน
🔧 โจทย์:
สร้างหน้า Project กับ Task แยกกัน แล้วทำลิงก์ไปมาระหว่างหน้าได้

📘 บทเรียน 2: State Management ด้วย Context (พื้นฐาน)

สิ่งที่เรียน	เหตุผล
สร้าง Context / Provider	แชร์ข้อมูล task/project
ใช้ useContext ในหลาย Component	ไม่ต้องส่ง props หลายชั้น
แยก logic เป็น Hook (useTasks())	จัดการให้สะอาดและ test ได้ง่าย
🔧 โจทย์:
สร้าง TaskContext ให้เก็บ task ทั้งหมดไว้ แล้วให้ทุกหน้าเรียกใช้ context ได้

📘 บทเรียน 3: จัดการ Task (Add/Edit/Delete)

สิ่งที่เรียน	เหตุผล
Form แบบ Controlled Component	ป้อนข้อมูลแบบมีฟอร์ม
Modal (MUI)	เปิด/ปิดกล่องเพิ่มงาน
การจัดการ event	กดปุ่มแล้วเพิ่ม task
filter, map, find, setState	ใช้จัดการงานใน list
🔧 โจทย์:
เพิ่มปุ่ม “Add Task” และ “Delete Task” พร้อม modal ให้กรอกข้อมูล

📘 บทเรียน 4: UI ที่ใช้ใน Task Manager

สิ่งที่เรียน	เหตุผล
Card / List / Table (MUI)	แสดง Task แบบอ่านง่าย
Modal, Snackbar	แจ้งเตือนและเปิดดู Task
Chip, IconButton	ใช้สำหรับ status, action ต่าง ๆ
🔧 โจทย์:

สร้าง TaskCard ที่แสดงชื่อ, ผู้รับผิดชอบ, สถานะ
แสดงใน List หรือ Grid พร้อมปุ่มดูรายละเอียด
