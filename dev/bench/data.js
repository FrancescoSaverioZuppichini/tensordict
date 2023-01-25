window.BENCHMARK_DATA = {
  "lastUpdate": 1674645021883,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8a8cb08e2e75d72a54954870813598abed7b104",
          "message": "[Doc] Benchmark badge",
          "timestamp": "2023-01-25T10:59:21Z",
          "tree_id": "3fdfb08926fc6f281caa6dee0de495756bd4198f",
          "url": "https://github.com/pytorch-labs/tensordict/commit/d8a8cb08e2e75d72a54954870813598abed7b104"
        },
        "date": 1674644813169,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 783.419995719395,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2764545268999996 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 197345.03436762202,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.067267100002937 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 93899.87094308234,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.649641899999551 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 35516.93497715748,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.15558270000338 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 54303.77274159544,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 18.41492679999419 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 29713.392519527406,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.65485779999062 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 25968.632660003284,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.507995899999514 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 26750.152608950317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.382964300002186 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 3391.4895987441164,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 294.85568830000375 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 25515.323549051594,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 39.19213479999826 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 18585.611889080883,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.805062000003545 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 19258.25053206588,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.92579660000547 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 12479.608257707803,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 80.1307204000068 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28123.19371757677,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 35.5578391999984 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 18650.740804065143,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.61717320000707 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 33152.91527889985,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.163259899995865 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 126768.35034954197,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.88840429999027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30920.364181530567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.341145600003074 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7149.397232710728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.8719314999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 24925.626914413242,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 40.11935199999925 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 7424.905164415115,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 134.6818548999977 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 20628.10559997802,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.477548999994724 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 7136.177385182917,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 140.13104580000117 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13774.104692088651,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.59999995312683 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1024.1986597991506,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 976.3730800000303 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 15799.29510813446,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 63.293962999978255 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 1930.7068929293378,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 517.9450094999993 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1877.9092377425434,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 532.5070987999993 usec\nrounds: 1"
          }
        ]
      }
    ],
    "CPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "apbard@users.noreply.github.com",
            "name": "Alessandro Pietro Bardelli",
            "username": "apbard"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336ac407316319209ac3922c3846615967e73304",
          "message": "[Minor, Doc] Typo (#186)",
          "timestamp": "2023-01-25T11:06:43Z",
          "tree_id": "521e651bea1baa188fb7dabf8a14cd84c43fe7d5",
          "url": "https://github.com/pytorch-labs/tensordict/commit/336ac407316319209ac3922c3846615967e73304"
        },
        "date": 1674645020906,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1130.9516054830988,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 884.2111326000008 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 177801.4751584992,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.624250299996447 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91245.7837034333,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.959410499998512 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 39981.15879895777,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.011781299997438 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50639.31912518209,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.74750090000157 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 38980.349978288636,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.6539513000007 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 33691.40388930231,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.681161499996733 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 34560.350898705845,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.93489140000156 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 7182.029630498912,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 139.23640689999957 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 32119.226259531017,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.134000299999794 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 21315.10978980235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.91507620000266 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 26810.746258647567,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.2984769000027 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15190.623042279247,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.83008460000315 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 29069.5669970526,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.4002372000034 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20821.26740886939,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 48.02781600000117 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31971.87753651864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.277487500000234 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 110356.89286724111,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 9.061509200000728 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 31271.62882662833,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.977867400001973 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7407.039310473893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 135.00670889999924 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 26408.15763411555,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 37.86708690000182 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 9249.81064620114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 108.11032120000164 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23402.93870467317,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.729676499999414 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 9528.57277566644,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 104.94751140000176 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 18621.973921058747,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.700000023582106 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1272.4678648834497,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 785.8744629999705 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13689.97207355927,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.04616799996211 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2609.0719257207957,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 383.2780499999956 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2564.761012566786,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 389.89987570000153 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}